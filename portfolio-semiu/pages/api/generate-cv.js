import { jsPDF } from 'jspdf';
import cvData from '@/data/cv.json';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Create PDF
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Helper function to add text with wrapping
    const addWrappedText = (text, x, y, maxW, fontSize = 10, isBold = false) => {
      doc.setFontSize(fontSize);
      doc.setFont(undefined, isBold ? 'bold' : 'normal');
      const lines = doc.splitTextToSize(text, maxW);
      doc.text(lines, x, y);
      return y + lines.length * (fontSize * 0.353); // Convert to mm
    };

    // Set header
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text(cvData.profile.fullName, margin, yPosition);
    yPosition += 8;

    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text(cvData.profile.title, margin, yPosition);
    yPosition += 6;

    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(cvData.profile.organization, margin, yPosition);
    yPosition += 5;
    doc.setFontSize(8);
    doc.text(cvData.profile.email, margin, yPosition);
    yPosition += 4;
    doc.text(cvData.profile.phone[0].number, margin, yPosition);
    yPosition += 4;
    doc.text(cvData.profile.address.full, margin, yPosition);
    yPosition += 12;

    // Section: Professional Summary
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('PROFESSIONAL SUMMARY', margin, yPosition);
    yPosition += 6;

    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    yPosition = addWrappedText(cvData.profile.summary, margin, yPosition, maxWidth, 9);
    yPosition += 6;

    // Section: Education
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('EDUCATION', margin, yPosition);
    yPosition += 6;

    cvData.education.forEach((edu) => {
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = margin;
      }

      doc.setFontSize(9);
      doc.setFont(undefined, 'bold');
      doc.text(`${edu.degree} in ${edu.field}`, margin, yPosition);
      yPosition += 4;

      doc.setFontSize(8);
      doc.setFont(undefined, 'normal');
      doc.text(`${edu.institution}, ${edu.location} (${edu.year})`, margin, yPosition);
      yPosition += 5;
    });

    yPosition += 2;

    // Section: Work Experience (first 5)
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('WORK EXPERIENCE', margin, yPosition);
    yPosition += 6;

    cvData.workExperience.slice(0, 5).forEach((job) => {
      if (yPosition > pageHeight - 25) {
        doc.addPage();
        yPosition = margin;
      }

      doc.setFontSize(9);
      doc.setFont(undefined, 'bold');
      doc.text(job.title, margin, yPosition);
      yPosition += 4;

      doc.setFontSize(8);
      doc.setFont(undefined, 'normal');
      doc.text(
        `${job.organization} • ${job.location}`,
        margin,
        yPosition
      );
      yPosition += 3;
      doc.text(
        `${job.startMonth} ${job.startYear} – ${job.endYear ? `${job.endMonth} ${job.endYear}` : 'Present'}`,
        margin,
        yPosition
      );
      yPosition += 4;

      if (job.responsibilities && job.responsibilities.length > 0) {
        job.responsibilities.slice(0, 3).forEach((resp) => {
          doc.text(`• ${resp}`, margin + 2, yPosition);
          yPosition += 3;
        });
      }

      yPosition += 2;
    });

    // Section: Professional Memberships
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('PROFESSIONAL MEMBERSHIPS', margin, yPosition);
    yPosition += 6;

    cvData.memberships.forEach((m) => {
      doc.setFontSize(8);
      doc.setFont(undefined, 'normal');
      doc.text(`• ${m.title}`, margin + 2, yPosition);
      yPosition += 4;
    });

    yPosition += 2;

    // Section: Awards (first 10)
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('AWARDS & RECOGNITION', margin, yPosition);
    yPosition += 6;

    cvData.awards.slice(0, 10).forEach((award) => {
      doc.setFontSize(8);
      doc.setFont(undefined, 'normal');
      doc.text(`• ${award.title} (${award.year})`, margin + 2, yPosition);
      yPosition += 3;
    });

    // Section: Publications
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition += 2;
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('PUBLICATIONS', margin, yPosition);
    yPosition += 6;

    cvData.publications.forEach((pub) => {
      doc.setFontSize(8);
      doc.setFont(undefined, 'normal');
      doc.text(`• ${pub.title} (${pub.year})`, margin + 2, yPosition);
      yPosition += 3;
    });

    // Generate PDF buffer
    const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', pdfBuffer.length);
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="cv-semiu-akanni.pdf"'
    );

    res.send(pdfBuffer);
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
}
