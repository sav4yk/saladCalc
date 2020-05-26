new Vue({
    el: '.app',
    data: {
        layers: [],
        layersTypes: {
            beet:{
                priceOneSm: 25,
                label: 'Свекла'
            },
            herring:{
                priceOneSm: 25,
                label: 'Сельдь'
            },
            carrot:{
                priceOneSm: 25,
                label: 'Морковь'
            },
            potato:{
                priceOneSm: 25,
                label: 'Картофель'
            },
            chickenEggYolk:{
                priceOneSm: 25,
                label: 'Яичный желток'
            },
            chickenEggGlair:{
                priceOneSm: 25,
                label: 'Яичный белок'
            },
            garlic:{
                priceOneSm: 25,
                label: 'Чеснок'
            },
            mayo:{
                priceOneSm: 25,
                label: 'Майонез'
            }
        },
        defaultLayerType: 'potato',
        defaultHeight: 5
    },
    computed: {

    },
    methods: {
        addLayer(){
            this.layers.push({
                type: this.defaultLayerType,
                height: this.defaultHeight
            });
        },
        changeHeight(i, dh) {
            this.layers[i].height += dh;
        }
    }
});
