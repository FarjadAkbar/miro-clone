import { dark } from "@clerk/ui/themes"

/** Shared Clerk theme aligned with globals.css design tokens. */
export const clerkAppearance = {
  theme: dark,
  variables: {
    colorBackground: "var(--color-bg-base)",
    colorForeground: "var(--color-copy-primary)",
    colorPrimary: "var(--color-brand)",
    colorPrimaryForeground: "var(--color-copy-primary)",
    colorMuted: "var(--color-bg-elevated)",
    colorMutedForeground: "var(--color-copy-muted)",
    colorNeutral: "var(--color-copy-secondary)",
    colorInput: "var(--color-bg-elevated)",
    colorInputForeground: "var(--color-copy-primary)",
    colorBorder: "var(--color-border-default)",
    colorRing: "var(--color-brand)",
    colorDanger: "var(--color-state-error)",
    colorSuccess: "var(--color-state-success)",
    colorWarning: "var(--color-state-warning)",
    borderRadius: "var(--radius)",
    fontFamily: "var(--font-geist-sans)",
    fontFamilyButtons: "var(--font-geist-sans)",
  },
  elements: {
    rootBox: "w-full",
    card: "bg-transparent shadow-none gap-6",
    cardBox:
      "w-full bg-bg-elevated border border-border-default rounded-2xl shadow-none p-2",
    headerTitle: "text-foreground text-xl font-semibold tracking-tight",
    headerSubtitle: "text-muted-foreground text-sm",
    socialButtonsBlockButton:
      "bg-bg-subtle border-border-default text-foreground hover:bg-bg-subtle/80",
    socialButtonsBlockButtonText: "text-foreground font-medium",
    dividerLine: "hidden",
    dividerRow: "justify-center gap-0 py-1",
    dividerText: "text-muted-foreground text-xs",
    formFieldLabel: "text-foreground text-sm font-medium",
    formFieldInput:
      "bg-bg-elevated border-border-default text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-accent-primary",
    formButtonPrimary:
      "bg-brand text-primary-foreground font-medium shadow-none hover:opacity-90",
    footerActionLink: "text-accent-ai-text hover:opacity-80 font-medium",
    footerActionText: "text-muted-foreground",
    identityPreviewEditButton: "text-accent-ai-text",
    formFieldInputShowPasswordButton: "text-muted-foreground hover:text-foreground",
    formResendCodeLink: "text-accent-ai-text",
    alertText: "text-foreground",
    otpCodeFieldInput:
      "bg-bg-elevated border-border-default text-foreground",
  },
} as const
