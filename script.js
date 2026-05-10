const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');

if (contactForm && formResult) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
      formResult.textContent = '모든 항목을 입력해 주세요.';
      return;
    }

    formResult.textContent = `${name}님, 문의가 접수되었습니다. 빠르게 연락드리겠습니다!`;
    contactForm.reset();
  });
}
