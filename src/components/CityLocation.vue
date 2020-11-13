<template>
  <div class="city-location">
    <input
      type="text"
      placeholder="Please enter your location..."
      required
      class="input-text"
    />
  </div>
</template>

<style lang="scss">
.city-location {
  position: absolute;
  width: 425px;
  height: 48px;
  left: 185px;
  top: 22px;

  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}

.city-location:hover {
  border: 1px solid #b5c7ff;
}

.city-location:focus-within {
  border: 2px solid #b5c7ff;
}

.input-text {
  border: none;
  position: absolute;
  width: 299px;
  height: 30px;
  left: 17px;
  top: 9px;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #08153e;
}

.input-text:focus {
  outline: none;
}

.input-text::placeholder {
  opacity: 0.5;
}
</style>
