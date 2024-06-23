import Link from "next/link";

import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";

export function LayoutFooter() {
  return (
    <footer className="border-t border-muted px-6 py-6">
      <div className="flex items-center justify-between px-4">
        <p className="text-muted-foreground">&copy; 2024 Bastien Bocquet</p>
        <div className="flex gap-4">
          <Link href="https://github.com/FakeSkdr" prefetch={false}>
            <GithubIcon className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bastien-bocquet/"
            prefetch={false}
          >
            <LinkedInIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
