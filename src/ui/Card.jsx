function Card({ title, description, img }) {
  return (
    <div className="p-6 rounded-xl border border-gray-100 bg-gradient-to-br from-white/80 to-red-100 shadow-md">
      {img && (
        <img
          src={img}
          alt={title}
          className="w-24 h-24 object-cover rounded-full mb-4 mx-auto"
        />
      )}
      {title && <h4 className="text-xl font-semibold text-black text-left">{title}</h4>}
      {description && <p className="text-slate-700 text-sm mt-2 text-left">{description}</p>}
    </div>
  );
}

export default Card;