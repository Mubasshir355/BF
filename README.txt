BF Brother and Exide - Attendance (Login, Settings, Light/Dark)

STEP 1 - Firebase (free)
 1. console.firebase.google.com > Add project.
 2. Authentication > Get started > Sign-in method > "Email/Password" ON.
 3. Firestore Database > Create database (Production mode).
    Rules tab mein firestore.rules ka text paste karke PUBLISH karein (zaroori).
 4. Project settings > Your apps > Web (</>) > config values firebase-config.js mein paste karein.
 5. Authentication > Settings > Authorized domains mein apni website ka domain add karein.

STEP 2 - Upload
 index.html aur firebase-config.js apni hosting par upload karein.

Features: Sign up, Login, Forgot password (email link), Sign out, Settings mein name/email/password change,
account delete, Light/Dark theme. Har account ka data alag aur private hai.
Email change par naye email par verification link aata hai.
Forgot-password email ka text: Authentication > Templates mein badal sakte hain.
