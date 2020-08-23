
const gdpr = () => {
  const consentButton = document.getElementById('consent')
  const declineButton = document.getElementById('decline')

  consentButton.addEventListener('click', event => {
        console.log('here',0)
  });

  consentButton.addEventListener('touch', event => {
    console.log('here', 1)
  });


  declineButton.addEventListener('click', event => {
    console.log('here', 2)
  });

  declineButton.addEventListener('touch', event => {
    console.log('here', 3)
  });
}


gdpr()
