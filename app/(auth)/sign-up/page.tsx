import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel - branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12 bg-surface border-r border-default">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Miro Clone</h1>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Collaborative infinite canvas for teams
          </p>
          <ul className="space-y-3 text-[var(--text-primary)]">
            <li>• Real-time collaboration</li>
            <li>• Infinite canvas</li>
            <li>• Shape tools & drawing</li>
            <li>• AI-powered suggestions</li>
          </ul>
        </div>
      </div>

      {/* Right panel - sign-up form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <SignUp />
      </div>
    </div>
  );
}
