public class MyList<E> implements List <E>{
    int size;
    E[] elements;
    public void MyList() {
        this(INITIAL_CAPACITY);
        //this.size = INITIAL_CAPACITY;
        //ASK if we have to initialize the elements object?

    }
    public void MyList(int capacity) {
        this.capacity = size;
        //ASK if we have to initialize the elements object?
    }
    public void add(E e) {
        if (e == null) {
            throw new IllegalArgumentException
        }
        int count = 0;
        for (E x: elements) {
            if (!(x == null)) {
                count +=1;
            }
        }

        if ((count+1) == size) {
            size = size * 2;
        } else {
            elements[count] = e;
        }

    }

    public E get(int index) {
        return elements[index];
    }

    public void replace (E e, E replaceWith){
        if (e == null || replaceWith == null) {
            throw new IllegalArgumentException
        }
        int indexcounter = 0;
        for (E x: elements) {
            if (x == e) {
                elements[indexcounter] = replaceWith;
            }
            indexcounter +=1;
        }

    }

    public int remove(E e) {
        int removeCount = 0;
        int index = 0;
        for(E x : elements) {
            if (x == e) {
                elements[index] = null;
                removeCount +=1;
            }
        index = index + 1;
        }
        return removeCount;
    }

    public int contains (E e) {
        if (e == null){
            throw new IllegalArgumentException
        }
        int instanceCount = 0;
        for(E x : elements) {
            if (x == e) {
                instanceCount +=1;
            }
        }
        return instanceCount;
    }
    boolean isEmpty() {
        int nonNullAdd = 0;
        for(E x : elements) {
            if (!(x == null)) {
                nonNullAdd +=1;
            }
        }
        if (nonNullAdd == 0) {
            return true;
        }else {
            return false;

        }

    }
    public void clear() {
        int clearInt = 0;
        for(E x: elements) {
            elements[clearInt] = null;
            clearInt = clearInt + 1;
        }
    }
    public int size() {
        int countsize = 0;
        for(E x: elements) {
            if (!(x == null)) {
                countsize = countsize + 1;
            }
        }
        return countsize;
    }
    E[] toArray(E[] e) {
        int countsize = 0;
        for (E x: elements) {
            if( !(x == null)) {
                countsize +=1;
            }
        }
        int indexcountsize = 0;
        for (E y: e) {
            if ((y[indexcountsize] == null) && (indexcountsize <= countsize)) {
                y[indexcountsize] = elements[indexcountsize];
            }
        }
    }
}


