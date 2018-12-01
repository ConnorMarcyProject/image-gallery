<template>
    <header>
        <div id="home-id">
            <RouterLink to="/">Home</RouterLink>
        </div>
        <br />
        <div id="album-id">
            <RouterLink to="/albums"> Albums</RouterLink>
        </div>
        <br />
        <div id="about-us">
            <RouterLink to="/aboutUs">About Us</RouterLink>
        </div>
    </header>
</template>

<script>
export default {

};
</script>

<style>
header {
    display: inline-block;
    background: rgba(128, 0, 0, .5);
    border-radius: 5px;
    padding: 20px 100px;
}

#home-id {
    background: white;
    padding: 10px;
    border: 2px solid maroon;
    border-radius: 5px;
}

#home-id:hover {
    background: lightgray;
    border: 3px solid maroon;
    transition: .3s
}

#album-id {
    background: white;
    padding: 10px;
    border: 2px solid maroon;
    border-radius: 5px;
}

#album-id:hover {
    background: lightgray;
    border: 3px solid maroon;
    transition: .3s;
}

#about-us {
    background: white;
    padding: 10px;
    border: 2px solid maroon;
    border-radius: 5px;
}

#about-us:hover {
    background: lightgray;
    border: 3px solid maroon;
    transition: .3s;
}
</style>
