<template>
  <div class="listing-item-container list-layout">
                <a href="listings-single-page.html" class="listing-item">
                  <!-- Image -->
                  <div class="listing-item-image">
                    <img :src="room.image" alt="" />
                    <span class="tag">Eat & Drink</span>
                  </div>

                  <!-- Content -->
                  <div class="listing-item-content">
                    <div class="listing-badge now-open">Now Open</div>

                    <div class="listing-item-inner">
                      <h3>Tom's Restaurant</h3>
                      <span>964 School Street, New York</span>
                      <div class="star-rating" data-rating="3.5">
                        <div class="rating-counter">(12 reviews)</div>
                      </div>
                    </div>

                    <span class="like-icon"></span>
                  </div>
                </a>
              </div>
</template>

<script>
export default {
    props:{
        room:{
            type:Object
        }
    }
}
</script>

<style>

</style>