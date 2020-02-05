<template>
    <section class="h-screen container">
        <browse-layout model="location">
            <div class="flex-grow w-full pt-2 p-4 flex">
                <template v-for="location in locations">
                    <panel
                        class="flex-1 max-w-sm lg:max-w-md first:mr-0 mr-4"
                        :key="location.id"
                    >
                        <h1
                            class="text-base font-semibold leading-tight xl:text-lg text-gray-900"
                        >
                            {{ location.name }}
                        </h1>
                    </panel>
                </template>
            </div>
        </browse-layout>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import BrowseLayout from '_Layouts/Browse/BrowseLayout';
    import Panel from '_Components/cards/Panel';

    export default {
        name: 'Browse',
        components: {
            BrowseLayout,
            Panel,
        },
        props: {
            pager: {
                type: Object,
                default: () => {},
            },
        },
        data: () => ({
            pageTitle: 'Browsing Locations',
            description: 'Viewing all locations associated with the current user',
        }),
        computed: {
            locations() {
                return this.pager.data;
            },
        },
        watch: {},
        created() {},
        mounted() {},
        methods: {},
        layout: MainLayout,
        metaInfo() {
            return {
                title: this.pageTitle,
                meta: [
                    {
                        name: 'description',
                        content: this.pageDescription,
                    },
                ],
            };
        },
    };
</script>