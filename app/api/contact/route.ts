import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      service,
      projectType,
      budget,
      timeline,
      message,
      referral,
    } = body;

    if (
      !name ||
      !email ||
      !service ||
      !projectType ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please complete all required fields.',
        },
        {
          status: 400,
        }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASS;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (
      !emailUser ||
      !emailPassword ||
      !contactEmail
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured.',
        },
        {
          status: 500,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    const emailSubject = `New project enquiry from ${name}`;

    const emailText = `
New Project Enquiry

Name:
${name}

Email:
${email}

Company / Brand:
${company || 'Not provided'}

Service:
${service}

Project Type:
${projectType}

Estimated Budget:
${budget || 'Not provided'}

Timeline:
${timeline || 'Not provided'}

How They Found Me:
${referral || 'Not provided'}


Project Details:
${message}
`;

    const emailHtml = `
      <div
        style="
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.6;
          color: #11110f;
          max-width: 680px;
          margin: 0 auto;
          padding: 32px 20px;
        "
      >

        <div
          style="
            border-bottom: 1px solid #deded7;
            padding-bottom: 20px;
            margin-bottom: 28px;
          "
        >
          <p
            style="
              margin: 0;
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: #73736d;
            "
          >
            New Project Enquiry
          </p>

          <h1
            style="
              margin: 8px 0 0;
              font-size: 28px;
              line-height: 1.15;
            "
          >
            ${name}
          </h1>
        </div>


        <div
          style="
            display: grid;
            gap: 18px;
          "
        >

          <div>
            <strong>Name</strong>
            <br />
            ${name}
          </div>

          <div>
            <strong>Email</strong>
            <br />
            <a
              href="mailto:${email}"
              style="color: #11110f;"
            >
              ${email}
            </a>
          </div>

          <div>
            <strong>Company / Brand</strong>
            <br />
            ${company || 'Not provided'}
          </div>

          <div>
            <strong>Service</strong>
            <br />
            ${service}
          </div>

          <div>
            <strong>Project Type</strong>
            <br />
            ${projectType}
          </div>

          <div>
            <strong>Estimated Budget</strong>
            <br />
            ${budget || 'Not provided'}
          </div>

          <div>
            <strong>Timeline</strong>
            <br />
            ${timeline || 'Not provided'}
          </div>

          <div>
            <strong>How They Found You</strong>
            <br />
            ${referral || 'Not provided'}
          </div>

        </div>


        <div
          style="
            margin-top: 32px;
            padding: 24px;
            border-radius: 16px;
            background: #f7f7f4;
          "
        >

          <p
            style="
              margin: 0 0 10px;
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: #73736d;
            "
          >
            Project Details
          </p>

          <p
            style="
              margin: 0;
              white-space: pre-wrap;
            "
          >
            ${message}
          </p>

        </div>


        <div
          style="
            margin-top: 32px;
            padding-top: 20px;
            border-top: 1px solid #deded7;
            font-size: 12px;
            color: #73736d;
          "
        >
          This enquiry was submitted through
          alameenaderibigbe.com.
        </div>

      </div>
    `;

    await transporter.sendMail({
      from: `"Al-ameen Aderibigbe — Portfolio" <${emailUser}>`,

      to: contactEmail,

      replyTo: email,

      subject: emailSubject,

      text: emailText,

      html: emailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been sent successfully.',
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.error(
      'CONTACT FORM ERROR:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          'Something went wrong while sending your enquiry.',
      },
      {
        status: 500,
      }
    );
  }
}