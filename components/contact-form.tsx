'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [status, setStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const [statusMessage, setStatusMessage] =
    useState('');

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus('idle');
    setStatusMessage('');

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);

    const data = {
      name:
        formData.get('name'),

      email:
        formData.get('email'),

      company:
        formData.get('company'),

      service:
        formData.get('service'),

      projectType:
        formData.get('projectType'),

      budget:
        formData.get('budget'),

      timeline:
        formData.get('timeline'),

      message:
        formData.get('message'),

      referral:
        formData.get('referral'),
    };

    try {

      const response =
        await fetch('/api/contact', {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify(data),
        });

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            'Something went wrong.'
        );
      }

      setStatus('success');

      setStatusMessage(
        'Your enquiry has been sent. I’ll get back to you soon.'
      );

      form.reset();

    } catch (error) {

      console.error(error);

      setStatus('error');

      setStatusMessage(
        'Something went wrong. Please try again or email me directly.'
      );

    } finally {

      setIsSubmitting(false);

    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        mt-12
        grid
        gap-6
      "
    >

      {/* NAME + EMAIL */}

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
        "
      >

        <div>

          <label
            htmlFor="name"
            className="
              mb-2
              block
              text-xs
              font-semibold
              uppercase
              tracking-[0.08em]
            "
          >
            Your name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            autoComplete="name"
            className="
              w-full
              rounded-2xl
              border
              border-[color:var(--line)]
              bg-[color:var(--bg)]
              px-4
              py-4
              text-sm
              text-[color:var(--fg)]
              outline-none
              transition
              placeholder:text-[color:var(--muted)]
              focus:border-[color:var(--fg)]
            "
          />

        </div>


        <div>

          <label
            htmlFor="email"
            className="
              mb-2
              block
              text-xs
              font-semibold
              uppercase
              tracking-[0.08em]
            "
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            className="
              w-full
              rounded-2xl
              border
              border-[color:var(--line)]
              bg-[color:var(--bg)]
              px-4
              py-4
              text-sm
              text-[color:var(--fg)]
              outline-none
              transition
              placeholder:text-[color:var(--muted)]
              focus:border-[color:var(--fg)]
            "
          />

        </div>

      </div>


      {/* COMPANY + SERVICE */}

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
        "
      >

        <div>

          <label
            htmlFor="company"
            className="
              mb-2
              block
              text-xs
              font-semibold
              uppercase
              tracking-[0.08em]
            "
          >
            Company / brand
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company or brand"
            autoComplete="organization"
            className="
              w-full
              rounded-2xl
              border
              border-[color:var(--line)]
              bg-[color:var(--bg)]
              px-4
              py-4
              text-sm
              text-[color:var(--fg)]
              outline-none
              transition
              placeholder:text-[color:var(--muted)]
              focus:border-[color:var(--fg)]
            "
          />

        </div>


        <div>

          <label
            htmlFor="service"
            className="
              mb-2
              block
              text-xs
              font-semibold
              uppercase
              tracking-[0.08em]
            "
          >
            What do you need?
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="
              w-full
              appearance-none
              rounded-2xl
              border
              border-[color:var(--line)]
              bg-[color:var(--bg)]
              px-4
              py-4
              text-sm
              text-[color:var(--fg)]
              outline-none
              transition
              focus:border-[color:var(--fg)]
            "
          >

            <option
              value=""
              disabled
            >
              Select a service
            </option>

            <option value="Brand Identity">
              Brand Identity
            </option>

            <option value="UI/UX Design">
              UI/UX Design
            </option>

            <option value="Web Design">
              Web Design
            </option>

            <option value="Brand Identity + UI/UX">
              Brand Identity + UI/UX
            </option>

            <option value="Brand Identity + Web Design">
              Brand Identity + Web Design
            </option>

            <option value="Full Brand + Digital Product">
              Full Brand + Digital Product
            </option>

            <option value="Other">
              Something else
            </option>

          </select>

        </div>

      </div>


      {/* PROJECT TYPE + BUDGET */}

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
        "
      >

        <div>

          <label
            htmlFor="projectType"
            className="
              mb-2
              block
              text-xs
              font-semibold
              uppercase
              tracking-[0.08em]
            "
          >
            Project type
          </label>

          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="
              w-full
              appearance-none
              rounded-2xl
              border
              border-[color:var(--line)]
              bg-[color:var(--bg)]
              px-4
              py-4
              text-sm
              text-[color:var(--fg)]
              outline-none
              transition
              focus:border-[color:var(--fg)]
            "
          >

            <option
              value=""
              disabled
            >
              Select project type
            </option>

            <option value="New business">
              New business
            </option>

            <option value="Existing business">
              Existing business
            </option>

            <option value="Startup">
              Startup
            </option>

            <option value="Personal brand">
              Personal brand
            </option>

            <option value="Digital product">
              Digital product
            </option>

            <option value="Redesign / refresh">
              Redesign / refresh
            </option>

          </select>

        </div>


        <div>

          <label
            htmlFor="budget"
            className="
              mb-2
              block
              text-xs
              font-semibold
              uppercase
              tracking-[0.08em]
            "
          >
            Estimated budget
          </label>

          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="
              w-full
              appearance-none
              rounded-2xl
              border
              border-[color:var(--line)]
              bg-[color:var(--bg)]
              px-4
              py-4
              text-sm
              text-[color:var(--fg)]
              outline-none
              transition
              focus:border-[color:var(--fg)]
            "
          >

            <option
              value=""
              disabled
            >
              Select a range
            </option>

            <option value="Under ₦250,000">
              Under ₦250,000
            </option>

            <option value="₦250,000 – ₦500,000">
              ₦250,000 – ₦500,000
            </option>

            <option value="₦500,000 – ₦1,000,000">
              ₦500,000 – ₦1,000,000
            </option>

            <option value="₦1,000,000 – ₦2,500,000">
              ₦1,000,000 – ₦2,500,000
            </option>

            <option value="₦2,500,000+">
              ₦2,500,000+
            </option>

            <option value="Not sure yet">
              I’m not sure yet
            </option>

          </select>

        </div>

      </div>


      {/* TIMELINE */}

      <div>

        <label
          htmlFor="timeline"
          className="
            mb-2
            block
            text-xs
            font-semibold
            uppercase
            tracking-[0.08em]
          "
        >
          When would you like to start?
        </label>

        <select
          id="timeline"
          name="timeline"
          defaultValue=""
          className="
            w-full
            appearance-none
            rounded-2xl
            border
            border-[color:var(--line)]
            bg-[color:var(--bg)]
            px-4
            py-4
            text-sm
            text-[color:var(--fg)]
            outline-none
            transition
            focus:border-[color:var(--fg)]
          "
        >

          <option
            value=""
            disabled
          >
            Select a timeline
          </option>

          <option value="As soon as possible">
            As soon as possible
          </option>

          <option value="Within 2 weeks">
            Within 2 weeks
          </option>

          <option value="Within 1 month">
            Within 1 month
          </option>

          <option value="1–3 months">
            1–3 months
          </option>

          <option value="Flexible">
            I’m flexible
          </option>

        </select>

      </div>


      {/* PROJECT DETAILS */}

      <div>

        <label
          htmlFor="message"
          className="
            mb-2
            block
            text-xs
            font-semibold
            uppercase
            tracking-[0.08em]
          "
        >
          Tell me about the project
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          required
          placeholder="What are you building? What problem are you trying to solve? What would you like help with?"
          className="
            w-full
            resize-none
            rounded-2xl
            border
            border-[color:var(--line)]
            bg-[color:var(--bg)]
            px-4
            py-4
            text-sm
            leading-6
            text-[color:var(--fg)]
            outline-none
            transition
            placeholder:text-[color:var(--muted)]
            focus:border-[color:var(--fg)]
          "
        />

      </div>


      {/* REFERRAL */}

      <div>

        <label
          htmlFor="referral"
          className="
            mb-2
            block
            text-xs
            font-semibold
            uppercase
            tracking-[0.08em]
          "
        >
          How did you find me?
        </label>

        <select
          id="referral"
          name="referral"
          defaultValue=""
          className="
            w-full
            appearance-none
            rounded-2xl
            border
            border-[color:var(--line)]
            bg-[color:var(--bg)]
            px-4
            py-4
            text-sm
            text-[color:var(--fg)]
            outline-none
            transition
            focus:border-[color:var(--fg)]
          "
        >

          <option
            value=""
            disabled
          >
            Select an option
          </option>

          <option value="LinkedIn">
            LinkedIn
          </option>

          <option value="Instagram">
            Instagram
          </option>

          <option value="X">
            X
          </option>

          <option value="Google">
            Google
          </option>

          <option value="Referral">
            Someone referred me
          </option>

          <option value="Other">
            Other
          </option>

        </select>

      </div>


      {/* STATUS */}

      {status !== 'idle' && (
        <div
          role="status"
          className={`
            rounded-2xl
            border
            px-4
            py-4
            text-sm
            leading-6

            ${
              status === 'success'
                ? 'border-green-600/20 bg-green-600/10 text-green-800 dark:text-green-300'
                : 'border-red-600/20 bg-red-600/10 text-red-800 dark:text-red-300'
            }
          `}
        >
          {statusMessage}
        </div>
      )}


      {/* SUBMIT */}

      <div
        className="
          flex
          flex-col
          gap-4
          pt-2
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        <p
          className="
            max-w-md
            text-xs
            leading-5
            text-[color:var(--muted)]
          "
        >
          Your information will only be used to
          respond to your project enquiry.
        </p>


        <button
          type="submit"
          disabled={isSubmitting}
          className="
            inline-flex
            min-h-[50px]
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-[color:var(--fg)]
            bg-[color:var(--fg)]
            px-7
            text-sm
            font-semibold
            text-[color:var(--bg)]
            transition
            duration-300
            hover:-translate-y-0.5
            hover:border-[color:var(--accent)]
            hover:bg-[color:var(--accent)]
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-60
            disabled:hover:translate-y-0
            disabled:hover:border-[color:var(--fg)]
            disabled:hover:bg-[color:var(--fg)]
          "
        >

          {isSubmitting
            ? 'Sending...'
            : 'Send enquiry'
          }

          {!isSubmitting && (
            <span aria-hidden="true">
              →
            </span>
          )}

        </button>

      </div>

    </form>
  );
}