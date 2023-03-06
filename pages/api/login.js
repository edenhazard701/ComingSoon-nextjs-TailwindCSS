
export async function loginwithMail(userInfo, csrfToken) {
  try {
    const res = await fetch(`${process.env.VITE_APP_API_URL}/api/auth`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'CSRF-Token': csrfToken
      },
      body: JSON.stringify(userInfo)
    })
    
    if (res.status === 200) {
      alert('Sing in successfully!')
    } else {
      alert('Sorry, something went wrong.')
    }
  } catch(err) {
    alert(err)
  }
}