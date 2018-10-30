public class MyList implements List <E>{
    int size;
    E[] elements;
    public void MyList();
    public void MyList(int capacity) {
        this.capacity = INITIAL_CAPACITY;
        //Check this!
    }
    void add throws IllegalArgumentException(E e) {
        elements.add(e);
    }
    E get(int index) {
        element.get(index);
    }
    void replace throws IllegalArgumentException(E e, E replaceWith){



    }
    int remove(E e);
    int contains throws IllegalArgumentException(E e);
    boolean isEmpty();
    void clear();
    int size();
    E[] toArray(E[] e);


}
