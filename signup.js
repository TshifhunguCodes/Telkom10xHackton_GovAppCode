// signup.js

const SUPABASE_URL = 'https://cwgidwpxsldxzmknpobq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3Z2lkd3B4c2xkeHpta25wb2JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0OTI0ODcsImV4cCI6MjA3MjA2ODQ4N30.Z791cAUdW0i9HB7o7oJrQBtTurIv721RC35kLZfOLdY';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim(); // fixed ID
    const password = document.getElementById('password').value.trim();

    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          surname
        }
      }
    });

    if (error) {
      alert('Error: ' + error.message);
      return;
    }

    alert('Signup successful! Please check your email to confirm.');
    window.location.href = 'ReportIssues.html';
  });
});
