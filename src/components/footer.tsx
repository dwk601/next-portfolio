import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Dongwook Kim. All rights reserved.</p>
    </footer>
  );
}
