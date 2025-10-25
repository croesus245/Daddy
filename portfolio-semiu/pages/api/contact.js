import nodemailer from 'nodemailer';

const RATE_LIMIT_STORE = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_REQUESTS = 5; // Max 5 requests per minute per IP

function getRateLimitKey(ip) {
  return `rate-limit:${ip}`;
}

function checkRateLimit(ip) {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  if (!RATE_LIMIT_STORE.has(key)) {
    RATE_LIMIT_STORE.set(key, []);
  }

  const timestamps = RATE_LIMIT_STORE.get(key).filter((t) => t > windowStart);

  if (timestamps.length >= RATE_LIMIT_REQUESTS) {
    return false;
  }

  timestamps.push(now);
  RATE_LIMIT_STORE.set(key, timestamps);
  return true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get client IP
  const ip =
    (req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(',')[0]) ||
    req.headers['x-real-ip'] ||
    req.socket.remoteAddress ||
    '0.0.0.0';

  // Check rate limit
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid name' });
  }

  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid message' });
  }

  // Check message length
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message is too long' });
  }

  // Use environment variables or fallback
  const SMTP_USER = process.env.SMTP_USER || 'noreply@example.com';
  const SMTP_PASS = process.env.SMTP_PASS || 'password';
  const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'ayindesemiu@yahoo.com';

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: SMTP_USER,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This message was sent from your portfolio website contact form.</small></p>
      `,
      text: `
New Message from Portfolio Contact Form

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
