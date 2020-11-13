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
  /* Rectangle */
  position: absolute;
  width: 425px;
  height: 48px;
  left: 185px;
  top: 22px;

  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;

  .input-text {
    border: none;
    position: absolute;
    width: 299px;
    height: 30px;
    left: 17px;
    top: 9px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #08153e;

    opacity: 0.5;
  }
}
</style>
