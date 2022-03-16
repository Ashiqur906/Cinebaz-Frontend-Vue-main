<template>
    <v-card
        min-height="70vh"
        rounded="lg"
        dark
        class="profile_wish"
        >
        <div class="profile_wish_1">
            <h2>Watch history</h2>
            <details-widget></details-widget>
        </div>
        <div class="profile_wish_1">
            <h2>Wishlisted Videos</h2>
            <details-widget></details-widget>
        </div>
        <div class="profile_wish_1">
            <h2>Favourites</h2>
            <details-widget></details-widget>
        </div>
    
    </v-card>
</template>
<style>
    .profile_wish_1 h2{
    margin-bottom: 20px;
    font-size: 30px;
   

    }
    .profile_wish_1{
    margin-top: 50px;
    margin-bottom: 20px;
    }

    .profile_wish{
    padding: 20px;
    }
    .frist_part:hover .v-card__title {
    display: block !important;
   
    background-color: white !important;
    color: black;
    }

    .frist_part:hover .v-card__subtitle {
        display: block !important;
    
        background-color: white !important;
        color: black;
    }

    .frist_part:hover .v-card__actions {
        display: block !important;
    
        background-color: white !important;
        color: black;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    
</style>