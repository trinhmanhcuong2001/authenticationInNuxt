<template>
    <div class="container">
        <div class="sidebar">sideBar</div>
        <div class="content">
            <div class="header">Header</div>
            <div class="content-item">
                <div class="content-item-1 red">COntent1</div>
                <div class="content-item-1 green">Content2</div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="css">
.container {
    display: flex;
    height: 100vh;
}
.sidebar {
    background-color: aqua;
    width: 35%;
    min-width: 64px;
    height: 100%;
    position: fixed;
}
.content {
    flex: 1;
    /* height: 100%; */
    margin-left: 35%;
}
.content .header {
    position: fixed;
    width: calc(100% - 35%);
    height: 48px;
    background-color: blue;
}
.content-item {
    display: flex;
    margin-top: 48px;
    /* max-height: calc(100vh - 48px); */
    overflow: hidden;
}
.content-item-1 {
    /* flex: 1; */
    flex-grow: 1;
    /* flex-shrink: 0; */
}
.red {
    background-color: red;
}
.green {
    background-color: green;
    height: 1000px;
}
</style>

<!-- flex-grow and flext-shrink -->
