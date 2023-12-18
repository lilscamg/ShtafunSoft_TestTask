export function addRow() {
    const row = document.createElement('row');
    row.style.display = 'inline-flex';
    row.style.flexDirection = 'row';
    row.style.alignItems = 'flex-start';
    row.style.height = 'auto';
    return row;
}

export function addColumn() {
    const col = document.createElement('row');
    col.style.display = 'inline-flex';
    col.style.flexDirection = 'column';
    col.style.alignItems = 'flex-start';
    col.style.width = 'auto';
    return col;
}