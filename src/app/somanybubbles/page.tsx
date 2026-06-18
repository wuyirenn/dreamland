import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import SoManyBubblesClient from './somanybubbles-wrapper';

export default function SoManyBubblesPage() {
    let content = "";
    try {
        const filePath = join(process.cwd(), 'src', 'app', 'somanybubbles', 'somanybubbles.md');
        content = readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error('Error reading somanybubbles content:', error);
    }

    return <SoManyBubblesClient content={content} />;
}
