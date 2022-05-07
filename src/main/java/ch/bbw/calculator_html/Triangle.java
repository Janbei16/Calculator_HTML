package ch.bbw.calculator_html;

public class Triangle {
    Float hypotenuseC;
    Float katheteA;
    Float katheteB;


    public Triangle(float hypotenuseC, float katheteA, float katheteB){
        this.hypotenuseC = hypotenuseC;
        this.katheteA = katheteA;
        this.katheteB = katheteB;
    }
    
    public Triangle(){

    }

    public Float getHypotenuseC() {
        return hypotenuseC;
    }

    public void setHypotenuseC(Float hypotenuseC) {
        this.hypotenuseC = hypotenuseC;
    }

    public Float getKatheteA() {
        return katheteA;
    }

    public void setKatheteA(Float katheteA) {
        katheteA = katheteA;
    }

    public Float getKatheteB() {
        return katheteB;
    }

    public void setKatheteB(Float katheteB) {
        katheteB = katheteB;
    }
}
