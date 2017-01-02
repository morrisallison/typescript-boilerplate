export function hello(): string {
    return 'Hello World!';
}

export function insertDiv(): void {
    document.body.insertAdjacentHTML('beforeend', '<div></div>');
}
