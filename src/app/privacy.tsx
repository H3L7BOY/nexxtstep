export const metadata = {
  title: "Privacy Policy | NEXTSTEP",
  description: "How NEXTSTEP collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0F3E46] text-[#E7F2F4] py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>

        <p className="mb-6">
          At NEXTSTEP, we value your privacy. This policy explains how we collect,
          use, and protect your information when you use our website or contact form.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#9BE7F4]">1. Information We Collect</h2>
        <p className="mb-4">
          We collect basic personal details such as your name, email address, and
          message when you submit our contact form.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#9BE7F4]">2. How We Use Your Information</h2>
        <p className="mb-4">
          Your data is used solely for communication, consultation scheduling, and
          service improvement. We do not sell or share your information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#9BE7F4]">3. Data Protection</h2>
        <p className="mb-4">
          We employ secure protocols (SSL, encrypted email services) to ensure your
          data remains private and protected.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#9BE7F4]">4. Contact Us</h2>
        <p>
          For privacy-related inquiries, contact us at{" "}
          <a
            href="mailto:consultant.ns.nextstep@gmail.com"
            className="text-[#9BE7F4] hover:underline"
          >
            consultant.ns.nextstep@gmail.com
          </a>.
        </p>
      </div>
    </main>
  );
}
