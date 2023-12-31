'use client'

import { redirect } from 'next/navigation'
import UserCard from '../components/usercard'
import { useSession } from '../lib/next-auth-react-query'


export default function Profile() {
  const [session, loading] = useSession({
    required: false,
    redirectTo: '/api/auth/signin?callbackUrl=/client',
    queryConfig: {
      staleTime: 60 * 1000 * 60 * 3, // 3 hours,
      refetchInterval: 60 * 1000 * 5, // 5 minutes
    }
  })




  return (
    <main className="styles.main">
      <UserCard user={session?.user} pagetype={"Client"} />
    </main>
  )
}
