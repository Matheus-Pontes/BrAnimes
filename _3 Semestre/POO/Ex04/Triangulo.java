public class Triangulo extends Forma
{
    private float base;
    private float altura;
    
    Triangulo(float base, float altura) 
    {
        this.base = base;
        this.altura = altura;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }

    public float getBase() {
        return base;
    }

    public void setBase(float base) {
        this.base = base;
    }

    public float area() 
    {
        return getBase() * getAltura() / 2;
    }

    public float perimetro() { return 0; }

    public void mostraDados() 
    {
        System.out.println(
            "------------------------" + "\n" +
            "   Dados do triângulo   " + "\n" + 
            " Base: " + getBase() + "\n" +
            " Raio: " + getAltura() + "\n" +
            " Área: " + area() + "\n" + 
            "------------------------" + "\n"
        );
    }

}
