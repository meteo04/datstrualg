class AMDFGraph implements ADTUGraph{
    // Die Knoten werden wie im Tiefendurchlauf geordnet.
    var adjacencyMatrix, depthFirstList;
    function create() {
        // Die Adjazenzmatrix wird als verkettete Liste von
        // verketteten Listen implementiert.
        adjacencyMatrix = new LinkedList;
        adjacencyMatrix.create();
        // Auch die Knoten werden in einer verketteten Liste
        // gespeichert.
        depthFirstList = new LinkedList;
        depthFirstList.create();
    }
    function nodeValue(u) {
        return depthFirstList.retrieve(u);
    }
    function areAdjacent?(u, v) {
        if(adjacencyMatrix.retrieve(u).retrieve(v) == 0 &&
                adjacencyMatrix.retrieve(v).retrieve(u) == 0) {
            // Wenn die Eintraege in der Adjazenzmatrix mit
            // Indizes u und v null sind, gibt es keine Kante
            // zwischen u und v.
            return false;
        }
        return true;
    }
    function edgeWeight(u, v) {
        return adjacencyMatrix.retrieve(u).retrieve(v);
    }
    function sort() {
        // Ordnet die Knoten in der Reihenfolge eines
        // Tiefendurchlaufs.
    }
    function iterationStart() {
        sort();
        return depthFirstList.retrieve(0);
    }
    function iterationNext(u) {
        if(u = depthFirstList.length() - 1) {
            return NIL;
        }
        return u + 1;
    }
    function adjacentStart(u) {
        sort();
        for(i = 0; i < depthFirstList.length(); i++) {
            if(adjacencyMatrix.retrieve(i).retrieve(u) != 0) {
                return i;
            }
        }
        return NIL;
    }
    function adjacentNext(u, v) {
        for(i = v + 1; i < depthFirstList.length(); i++) {
            // Sucht beginnend bei v+1 nach einer Kante
            // (Eintrag ungleich null in der Adjazenzmatrix).
            if(adjacencyMatrix.retrieve(u).retrieve(i) != 0) {
                return i;
            }
        }
        return NIL;
    }
    function insert(x) {
        elements = depthFirstList.length();
        // Das Element wird ans Ende von depthFirstList angefuegt.
        depthFirstList.insert(elements, x);
        // Die Adjazenzmatrix wird mit verketteten Listen
        // gefuellt.
        newColumn = new LinkedList;
        newColumn.create();
        adjacencyMatrix.insert(newColumn);
        for(i = 0; i < elements; i++) {
            // Die letzte Spalte der Matrix wird mit Nullen
            // gefuellt (da es zu x keine Kanten gibt).
            adjacencyMatrix.retrieve(i).insert(elements, 0);
            // Es wird noch eine Zeile fuer x in die Matrix
            // eingefuegt.
            adjacencyMatrix.retrieve(elements + 1).insert(i, 0));
        }
    }
    function remove(u) {
        for(i = 0; i < depthFirstList.length(); i++) {
            // Die zu u gehoerige Zeile in der Adjazenzmatrix wird
            // geloescht.
            adjacencyMatrix.retrieve(u).delete(i);
        }
        for(i = 0; i < depthFirstList.length() - 1; i++) {
            // Die zugehoerige Spalte wird geloescht.
            adjacencyMatrix.retrieve(i).delete(u);
        }
        // Der Knoten wird geloescht.
        depthFirstList.delete(u);
    }
    function changeWeight(u, v, w) {
        // Das Gewicht der Kante (u, v) wird in der
        // Adjazenzmatrix geaendert.
        adjacencyMatrix.retrieve(u).retrieve(v) = w;
    }
}
