django_language_set(language_code);{
    url = "{% url 'set_language' %}";
    data = {
      language: language_code,
      next: '',
      csrfmiddlewaretoken: '{{ csrf_token }}'
    };
    this.form_post(url, data)
  };
  
  form_post(path, params, method='post');{
    /* simulates a post submit, call like:
      form_post('/home', {language: 'de', next: ''})"
    */
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
  }