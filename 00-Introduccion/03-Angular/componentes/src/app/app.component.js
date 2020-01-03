var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'componentes';
        this.arregloObjetos = [
            {
                id: 1,
                "nombre": "Carolina",
                apellido: "Cevallos",
                sueldo: 12.12,
                casado: false,
                carro: null,
                comida: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjNtamJ65fmAhXRjVkKHYM_B5YQjRx6BAgBEAQ&url=https%3A%2F%2Fcocina-casera.com%2Fcomida-platos-tipicos-ecuador%2F&psig=AOvVaw0uFX0pg599y6ITmKBmCvOZ&ust=1575406062331847",
                ojos: undefined
            },
            {
                id: 2,
                "nombre": "Nancy",
                apellido: "Simbaña",
                sueldo: 44.12,
                casado: true,
                carro: null,
                comida: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjssIer65fmAhWCpFkKHQYfAOkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.eltelegrafo.com.ec%2Fnoticias%2Fregional%2F1%2F20-platos-tipicos-seran-presentados&psig=AOvVaw0uFX0pg599y6ITmKBmCvOZ&ust=1575406062331847",
                ojos: undefined
            },
            {
                id: 2,
                "nombre": "Sergio",
                apellido: "Lizano",
                sueldo: 33.12,
                casado: false,
                carro: null,
                comida: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwio_MC165fmAhUmwVkKHZH-CycQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tripadvisor.com%2FLocationPhotoDirectLink-g297476-d6767458-i222484489-Ecotours_Boquilla-Cartagena_Cartagena_District_Bolivar_Department.html&psig=AOvVaw0uFX0pg599y6ITmKBmCvOZ&ust=1575406062331847",
                ojos: undefined
            }
        ];
    }
    AppComponent.prototype.imprimirSueldo = function (sueldo) {
        console.log(sueldo);
    };
    AppComponent.prototype.imprimirResultados = function (numeroUno, numeroDos) {
        var suma = numeroUno + numeroDos;
        console.log('Suma:', suma);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
