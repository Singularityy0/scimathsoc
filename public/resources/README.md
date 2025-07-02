# Resources Folder

This folder contains all downloadable resources for the Science Maths Society website.

## Folder Structure

```
resources/
├── lectures/          # Lecture notes and study materials
└── books/            # Reference books and textbooks
```

## File Organization

### Lectures
- PDF files containing lecture notes
- Study materials and handouts
- Course summaries and review materials

### Books
- Reference textbooks in PDF format
- Classic mathematical texts
- Research papers and publications

## Usage

Files in this folder are served statically and can be downloaded directly from the website. The file paths in the React components should match the actual file structure in this folder.

## Adding New Resources

1. Place the file in the appropriate subfolder
2. Update the resource data in `src/pages/Resources.js`
3. Ensure the file path matches the `file` property in the resource object
4. Test the download functionality

## File Types Supported

- PDF: Documents and books

## Future Expansions

The following categories may be added in the future:
- Videos: Video lectures and tutorials
- Code: Programming examples and algorithms
- Datasets: Mathematical datasets and examples 