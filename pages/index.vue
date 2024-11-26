<template>
    <div class="container">
        <div class="sidebar">sideBar</div>
        <div class="content">
            <div class="header">Header</div>
            <div class="content-item">
                <div class="content-item-1 red">
                    <div >COntent1</div>
                </div>
                <div class="content-item-1 green">
                    <div style="height: 3000px;">Content2</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="css">
.container {
    display: flex;
    height: 100vh;
    overflow: hidden;
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
    /* overflow: hidden; */
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
    overflow: hidden;
    height: 100%;
}
.content-item-1 {
    overflow: auto;
    flex: 1;
    /* height: 100%; */
}

.content-item-1::-webkit-scrollbar {
    width: 0;
}
.red {
    background-color: red;
    /* height: 2000px; */
}
.green {
    background-color: green;
    /* height: 5000px; */
}
</style>

<!-- flex-grow and flext-shrink -->
