import axios from 'axios'

const RECAPTCHA_SECRET_KEY = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'

const recaptchaValidation = async (token) => {
  const result = await axios({
    url: 'https://www.google.com/recaptcha/api/siteverify',
    method: 'POST',
    data: {
      secret: RECAPTCHA_SECRET_KEY,
      response: token,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  console.log(result)
}

export default recaptchaValidation
