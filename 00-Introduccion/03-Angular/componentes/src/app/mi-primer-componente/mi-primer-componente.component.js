var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var MiPrimerComponenteComponent = (function () {
    function MiPrimerComponenteComponent() {
        this.cambioSueldo = new core_1.EventEmitter();
        this.suma = 0;
        this.resta = 0;
        this.multiplicacion = 0;
        this.division = 0;
        console.log('Instanciando');
    } // instancia la clase (Ayuda -> Angular)
    MiPrimerComponenteComponent.prototype.ngOnInit = function () {
        console.log('Esta listo');
        console.log(this.titulo);
        console.log(this.textoImagen);
        console.log(this.textoBoton);
    };
    MiPrimerComponenteComponent.prototype.ngOnDestroy = function () {
    };
    MiPrimerComponenteComponent.prototype.saludar = function () {
        alert("HOLAAAAAAAAAAAAAAA");
    };
    MiPrimerComponenteComponent.prototype.aumentarSueldo = function () {
        // this.textoBoton = this.textoBoton + 1;
        this.textoBoton = (Number(this.textoBoton) + 1).toString();
        this.cambioSueldo.emit(this.textoBoton);
        // this.textoBoton = (+this.textoBoton + 1).toString();
    };
    MiPrimerComponenteComponent.prototype.escucharNum = function (event) {
        console.log(event.srcElement.value);
        this.numUno = Number(event.srcElement.value);
        //this.enviarNumeroAOperaciones.emit(this.numUno);
        this.calcular();
    };
    MiPrimerComponenteComponent.prototype.escucharNum2 = function (event) {
        this.numDos = Number(event.srcElement.value);
        console.log(this.numDos);
        //this.enviarNumeroAOperaciones.emit(this.numDos);
        this.calcular();
    };
    MiPrimerComponenteComponent.prototype.calcular = function () {
        var num1 = Number(this.numUno);
        var num2 = Number(this.numDos);
        console.log(num1 + num2);
        this.suma = num1 + num2;
        this.resta = num1 - num2;
        this.multiplicacion = num1 * num2;
        this.division = num1 / num2;
    };
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "titulo");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "imagen");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "textoImagen");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "textoBoton");
    __decorate([
        core_1.Output()
    ], MiPrimerComponenteComponent.prototype, "cambioSueldo");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "numUno");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "numDos");
    MiPrimerComponenteComponent = __decorate([
        core_1.Component({
            selector: 'app-mi-primer-componente',
            templateUrl: './mi-primer-componente.component.html',
            styleUrls: ['./mi-primer-componente.component.scss']
        })
    ], MiPrimerComponenteComponent);
    return MiPrimerComponenteComponent;
})();
exports.MiPrimerComponenteComponent = MiPrimerComponenteComponent;
// class (etiqueta html) (web-component)
// Instanciar a la clase
// Clase esta lista
// Clase se destruye
