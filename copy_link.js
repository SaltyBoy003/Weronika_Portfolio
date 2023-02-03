    let mail = "w.weronikadomagalska@gmail.com";
  const copy_link = async () => {
    try {
      await navigator.clipboard.writeText(mail);
      console.log('Mail copied');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }