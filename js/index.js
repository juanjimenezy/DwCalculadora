let v1, v2,r, op;

function sumar() {

    this.op = 'SUMA';
    
    if (this.v1 == null) {
        this.v1 = document.getElementById('ans').value;
        document.getElementById('ans').value = null;
    }else if (this.v2 == null){
        this.v2 = document.getElementById('ans').value;
        this.r = (parseFloat(this.v1) + parseFloat(this.v2));
        document.getElementById('ans').value = this.r;
    }else if (this.r != null){
        this.v1 = document.getElementById('ans').value;
        this.v2 = null;
        this.r = null;
        document.getElementById('ans').value = this.r;
    }

}

function restar() {

    this.op = 'RESTA';
    
    if (this.v1 == null) {
        this.v1 = document.getElementById('ans').value;
        document.getElementById('ans').value = null;
    }else if (this.v2 == null){
        this.v2 = document.getElementById('ans').value;
        this.r = (parseFloat(this.v1) - parseFloat(this.v2));
        document.getElementById('ans').value = this.r;
    }else if (this.r != null){
        this.v1 = document.getElementById('ans').value;
        this.v2 = null;
        this.r = null;
        document.getElementById('ans').value = this.r;
    }

}

function multiplicar() {

    this.op = 'MULTIPLICAR';
    
    if (this.v1 == null) {
        this.v1 = document.getElementById('ans').value;
        document.getElementById('ans').value = null;
    }else if (this.v2 == null){
        this.v2 = document.getElementById('ans').value;
        this.r = (parseFloat(this.v1) * parseFloat(this.v2));
        document.getElementById('ans').value = this.r;
    }else if (this.r != null){
        this.v1 = document.getElementById('ans').value;
        this.v2 = null;
        this.r = null;
        document.getElementById('ans').value = this.r;
    }

}

function dividir() {

    this.op = 'DIVIDIR';
    
    if (this.v1 == null) {
        this.v1 = document.getElementById('ans').value;
        document.getElementById('ans').value = null;
    }else if (this.v2 == null){
        this.v2 = document.getElementById('ans').value;
        this.r = (parseFloat(this.v1) / parseFloat(this.v2));
        document.getElementById('ans').value = this.r;
    }else if (this.r != null){
        this.v1 = document.getElementById('ans').value;
        this.v2 = null;
        this.r = null;
        document.getElementById('ans').value = this.r;
    }

}

function limpiar(){
    this.v1 = null;
    this.v2 = null;
    this.r = null;
    document.getElementById('ans').value = null;
}

function operar(){

    if (this.op == 'SUMA'){
        this.v2 = document.getElementById('ans').value;
        this.r = (parseFloat(this.v1) + parseFloat(this.v2));
        document.getElementById('ans').value = this.r;
    }

    if (this.op == 'RESTA'){
        this.v2 = document.getElementById('ans').value;
        this.r = (parseFloat(this.v1) - parseFloat(this.v2));
        document.getElementById('ans').value = this.r;
    }

    if (this.op == 'MULTIPLICAR'){
        this.v2 = document.getElementById('ans').value;
        this.r = (parseFloat(this.v1) * parseFloat(this.v2));
        document.getElementById('ans').value = this.r;
    }

    if (this.op == 'DIVIDIR'){
        this.v2 = document.getElementById('ans').value;
        this.r = (parseFloat(this.v1) / parseFloat(this.v2));
        document.getElementById('ans').value = this.r;
    }
}
