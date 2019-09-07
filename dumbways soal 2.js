const password_valid = password => (
    /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{8,})/.test(password)
)

console.log(password_valid('123Qwer_!'))
console.log(password_valid('123qwer_'))