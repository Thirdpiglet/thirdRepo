<template>
  <div class="container-full-bg kleurtje hoogte padding0 d-flex justify-content-center relatief">

<h2>Contact Form Versie 2</h2>

    <form id="contact-form">
        Name<br>
        <input type="text" name="name" required>
        <br>
        Email<br>
        <input type="email" name="email" required>
        <br>
        Message<br>
        <textarea name="message" required></textarea>
        <br>
        Email Afzender<br>
        <input type="email" name="EmailAfzender" required>
        <br><br>
        <button type="submit" @click="submitForm()">Submit Form</button>
    </form>

    <div id="success-message" style="display: none">
    <h3>Message Sent!</h3>
    <p>
        We're 87% sure that your message was sent. You should receive a reply within 8-12 business days.
    </p>
    <button id="buttonX" class="buttonX" @click="submitForm()">
    </button>
</div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      reRenderKey: 0,
    };
  },
  created() {
    var contactForm = document.getElementById("contact-form");
    var successMessage = document.getElementById("success-message");
  },
  methods: {
  submitForm: async function() {
      let contactForm = document.getElementById("contact-form");
      contactForm.onsubmit = function(event) {
        event.preventDefault(); // Don't let the browser submit the form.
        var payload = {};
        // Build JSON key-value pairs using the form fields.
        contactForm.querySelectorAll("input, textarea").forEach(field => {
            payload[field.name] = field.value;
        });
    
        // Post the payload to the contact endpoint.
        fetch("https://sendformtof.azurewebsites.net/api/contact", {
            method: 'post',
            body: JSON.stringify(payload)
        }).then(resp => {
      if (!resp.ok) {
                console.error(resp);
                return;
            }
            // Display success message.
            let successMessage = document.getElementById("success-message");
            successMessage.style.display = "block";
            contactForm.style.display = "none";
        });
      }
    },

  }
}
</script>

<style scoped>
</style>
