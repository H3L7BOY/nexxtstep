export const metadata = {
  title: "Terms of Service | NEXTSTEP",
  description: "The terms governing the use of NEXTSTEP’s website and services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0F3E46] text-[#E7F2F4] py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">Terms of Service</h1>

        <p className="mb-6">
          Welcome to NEXTSTEP. By using our website, you agree to these Terms of
          Service. Please review them carefully before proceeding.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#9BE7F4]">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing this site, you agree to comply with applicable laws and
          these terms. If you disagree, please refrain from using the website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#9BE7F4]">2. Use License</h2>
        <p className="mb-4">
          You may view and temporarily download materials from NEXTSTEP’s site for
          personal, non-commercial use only.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#9BE7F4]">3. Disclaimer</h2>
        <p className="mb-4">
          All materials are provided “as is.” NEXTSTEP disclaims warranties of any
          kind, including implied warranties of merchantability or fitness for a
          particular purpose.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#9BE7F4]">4. Limitations</h2>
        <p className="mb-4">
          NEXTSTEP shall not be liable for any damages arising from the use or
          inability to use the materials on this website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#9BE7F4]">5. Contact Information</h2>
        <p>
          For questions regarding these Terms, please contact us at{" "}
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
