export function FeedBackOpen(bool) {
    let feedBackModal = document.getElementById('feedBack')
    let feedBackContent = document.getElementById('feedBackContent')

    if (bool) {
        feedBackModal.style = `opacity: 1; visibility: visible;`
        feedBackContent.style = `transform: translateY(0);`
        document.body.style.overflow = 'hidden'
    }
    else {
        feedBackModal.style = `opacity: 0; visibility: hidden;`
        feedBackContent.style = `transform: translateY(900px);`
        document.body.style.overflow = 'auto'
    }
}

export function SuccessOpen(bool) {
    let SuccessModal = document.getElementById('modalSuccess')
    let SuccessContent = document.getElementById('modalSuccessContent')

    if (bool) {
        SuccessModal.style = `opacity: 1; visibility: visible;`
        SuccessContent.style = `transform: translateY(0); background: linear-gradient(#4375f7, #19191b, #19191b);`
    }
    else {
        SuccessModal.style = `opacity: 0; visibility: hidden;`
        SuccessContent.style = `transform: translateY(900px);`
        document.body.style.overflow = 'auto'
    }
}

export function ErrorOpen(bool) {
    let ErrorModal = document.getElementById('modalError')
    let ErrorContent = document.getElementById('modalErrorContent')

    if (bool) {
        ErrorModal.style = `opacity: 1; visibility: visible;`
        ErrorContent.style = `transform: translateY(0); background: linear-gradient(#eb061e, #19191b, #19191b)`
    }
    else {
        ErrorModal.style = `opacity: 0; visibility: hidden;`
        ErrorContent.style = `transform: translateY(900px);`
        document.body.style.overflow = 'auto'
    }
}