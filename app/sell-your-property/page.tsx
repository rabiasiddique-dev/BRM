import { redirect } from 'next/navigation';

export default function SellPropertyRedirectPage() {
  redirect('/contact?type=Project%20Marketing');
}
