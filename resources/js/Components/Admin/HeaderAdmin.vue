<template>
    <header class="navbar">
        <a href="">
            <img src="/logo/logo_2.svg" alt="Quang Duy" class="logo">
        </a>
        <!-- <div>
            <form id="search-form" role="search" class="algolia-search-wrapper search-box">
                <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;">
                    <input id="algolia-search-input" class="search-query ds-input" placeholder="Search..."
                        autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false"
                        aria-label="search input" aria-owns="algolia-autocomplete-listbox-0" dir="auto"
                        style="position: relative; vertical-align: top;">
                    <pre aria-hidden="true"
                        style="position: absolute; visibility: hidden; white-space: pre; font-family: Arial; font-size: 14.4px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
                    <span class="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0"
                        style="position: absolute; top: 100%; z-index: 100; left: 0px; right: auto; display: none;">
                        <div class="ds-dataset-1"></div>
                    </span>
                </span>
            </form>
        </div> -->
    </header>
</template>
<script setup>
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3.6rem;
    padding: 0.7rem 1.5rem;
    line-height: 2.2rem;
    z-index: 500;
    border-bottom: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    background-color: #fff;
    box-sizing: border-box;

    .logo {
        width: 132px;
        height: 2.2rem;
        min-width: 2.2rem;
        margin-right: 0.8rem;
        vertical-align: top;
    }
}
</style>
