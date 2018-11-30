<template>
    <header>
        <div id="home-id">
            <RouterLink to="/">Home</RouterLink>
        </div>
        <br />
        <div id="album-id">
            <RouterLink to="/albums"> Albums</RouterLink>
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
    border-radius: 5px;
}

#home-id:hover {
    background: lightgray;
    transition: .5s;
}

#album-id:hover {
    background: lightgray;
    transition: .5s;
}

#album-id {
    background: white;
    padding: 10px;
    border-radius: 5px;
}
</style>
