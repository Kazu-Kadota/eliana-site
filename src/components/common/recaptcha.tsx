import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import recaptchaValidation from 'src/services/recaptcha-validation'

const Recaptcha: React.FC = () => {
  const onChange = async (value) => {
    console.log(value)
    await recaptchaValidation(value)
  }

  return (
    <>
      <ReCAPTCHA
        sitekey='6LdkEAEkAAAAAMJKkfEIEkfxGSeqw6q7Xnt2_9ZL'
        onChange={onChange}
      />
    </>
  )
}

export default Recaptcha
