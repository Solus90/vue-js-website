<template>
<div class="box is-centered">
  <div class="container">
     <form class="form-horizontal" >
<fieldset>

<!-- Form Name -->
<legend>Contact Me</legend>

<!-- Text input-->
<div class="field">
  <label class="label" for="textinput-0">Email</label>
  <div class="control">
    <input id="textinput-0" name="textinput-0" type="text" placeholder="Email Address" class="input ">
    <p class="help is-hidden">help</p>
  </div>
</div>

<!-- Textarea -->
<div class="field">
  <label class="label" for="textarea-0">Comment</label>
  <div class="control">                     
    <textarea class="textarea" id="textarea-0" name="textarea-0" placeholder="Comment"></textarea>
  </div>
</div>

<!-- Button -->
<div class="field">
  <label class="label" for="singlebutton-0">Send</label>
  <div class="control">
    <button id="singlebutton-0" name="singlebutton-0" class="button is-primary">Submit</button>
  </div>
</div>

</fieldset>
</form>

  </div>
</div>
</template>

<script>
export default {
    name: 'Contact'

}
</script>

<style scoped>
.box{
  margin-top: 4rem;
  align-content: center;
}

fieldset{
  margin-top: 5px;
}



</style>