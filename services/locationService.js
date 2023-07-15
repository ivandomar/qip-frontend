class LocationService {
    STORAGE_KEY = '9id039r39hfw3';

    constructor() {
        this.storage = sessionStorage;
    }

    commit(stack) {
        const serializedStack = stack.reduce((acc, curr, index) => {
            return index === 0
                ? `${curr.id}<=>${curr.title}`
                : `${acc}||${curr.id}<=>${curr.title}`;
        }, '');

        this.storage.setItem(this.STORAGE_KEY, serializedStack);
    }

    fetch() {
        const value = this.storage.getItem(this.STORAGE_KEY);

        return value ?
            value.split('||').map((e) => {
                const parts = e.split('<=>');

                return ({ id: parts[0], title: parts[1] });
            })
            : Array();
    }

    navigate(id, title) {
        const stack = this.fetch();
        stack.push(({id, title}));

        this.commit(stack);
    }

    getCurrentLocation() {
        const stack = this.fetch();

        return stack.length ? stack[stack.length - 1] : null;
    }

    getLastIndex() {
        const stack = this.fetch();

        return stack.length ? stack.length - 1 : null;
    }

    getStack() {
        return this.fetch();
    }

    goBack() {
        const stack = this.fetch();
        stack.pop();

        this.commit(stack);
    }
};

export default new LocationService();