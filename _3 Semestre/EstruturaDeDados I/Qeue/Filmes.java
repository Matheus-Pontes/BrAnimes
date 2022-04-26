public class Filmes 
{
    private String title;
    private String director;
    private String gender;
    private String country;
    private int    releaseYear;

    Filmes(String title, String director, String gender, String country, int releaseYear) 
    {
        this.title = title;
        this.director = director;
        this.gender = gender;
        this.country = country;
        this.releaseYear = releaseYear;
    }

    public String getCountry() { return country; }
    
    public String getDirector() { return director; }
    
    public String getGender() { return gender; }
    
    public int getReleaseYear() { return releaseYear; }
    
    public String getTitle() { return title; }

    public void setTitle(String title) 
    {
        this.title = title;
    }
    
    public void setCountry(String country) 
    {
        this.country = country;
    }
    
    public void setDirector(String director)
    {
        this.director = director;
    }
    
    public void setGender(String gender)
    {
        this.gender = gender;
    }
    
    public void setReleaseYear(int releaseYear)
    {
        this.releaseYear = releaseYear;
    }

    @Override
    public String toString() 
    {
        return getTitle() + " | " +
               getDirector() + " | " + 
               getGender() + " | " + 
               getCountry() + " | " + 
               getReleaseYear();
    }
}