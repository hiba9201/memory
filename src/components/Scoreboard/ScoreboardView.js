import { getRequest } from '../../api/api-utils';

import './Scoreboard.css';

export default class ScoreboardView {
    constructor(modal, modalBody) {
        this.modal = modal;
        this.modalBody = modalBody;
        this.loader = document.querySelector('#loader');
    }

    async render() {
        const { loader } = this;

        if (loader.classList.contains('loader_hidden')) {
            loader.classList.remove('loader_hidden');
        }
        const scoreboardData = await getRequest('scoreboard');

        const scoreboardArray = Object.entries(scoreboardData || {});
        scoreboardArray.sort((a, b) => b[1] - a[1]);
        const table = ScoreboardView.createTable(scoreboardArray);

        this.modalBody.appendChild(table);

        this.modal.classList.remove('modal_hidden');
        loader.classList.add('loader_hidden');
    }

    static createTable(data) {
        const table = document.createElement('table');
        const caption = document.createElement('caption');
        caption.innerText = 'лидерборд';

        table.appendChild(caption);

        const tableHead = document.createElement('thead');

        const tableHeadRow = document.createElement('tr');

        const tableHeadName = document.createElement('th');
        tableHeadName.innerText = 'имя';

        const tableHeadScore = document.createElement('th');
        tableHeadScore.innerText = 'очки';

        tableHeadRow.appendChild(tableHeadName);
        tableHeadRow.appendChild(tableHeadScore);
        tableHead.appendChild(tableHeadRow);

        const tableBodyColumns = document.createElement('td');
        tableBodyColumns.setAttribute('colspan', '2');

        const scrollContainer = document.createElement('div');
        scrollContainer.classList.add('table__scroll-container');

        const tableBody = document.createElement('table');

        ScoreboardView.renderTableRows(data, tableBody);
        scrollContainer.appendChild(tableBody);
        tableBodyColumns.appendChild(scrollContainer);

        table.appendChild(tableHead);
        table.appendChild(tableBodyColumns);

        return table;
    }

    static renderTableRows(data, body) {
        data.forEach((pair) => {
            const rowTag = document.createElement('tr');
            const nameTag = document.createElement('td');
            nameTag.innerText = pair[0];
            rowTag.appendChild(nameTag);

            const propTag = document.createElement('td');
            propTag.innerText = pair[1];
            rowTag.appendChild(propTag);

            body.appendChild(rowTag);
        });
    }
}
