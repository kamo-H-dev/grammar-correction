'use server';

import { createSession, deleteSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';
import { testUser } from '@/app/constants';
import { loginSchema } from '@/app/lib/definitions';

export async function login(prevState, formData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));
  
    if (!result.success) {
        return {
            error: true,
        };
    }

    const { email, password } = result.data;

    if (email !== testUser.email || password !== testUser.password) {
        return {
            error: true
        };
    }

    await createSession(testUser.id);

    redirect('/check-text');
}

export async function logout() {
    await deleteSession();
    redirect('/login');
}
